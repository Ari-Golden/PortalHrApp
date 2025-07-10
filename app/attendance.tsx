import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AttendanceCamera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<any>(null);
  const [status, setStatus] = useState<"clockin" | "clockout" | null>(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Izinkan akses kamera untuk absensi</Text>
        <Button onPress={requestPermission} title="Izinkan Kamera" />
      </View>
    );
  }

  const takePhoto = async (action: "clockin" | "clockout") => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setStatus(action);
    }
  };

  const retakePhoto = () => {
    setPhotoUri(null);
    setStatus(null);
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.previewContainer}>
          <Text style={styles.statusText}>
            {status === "clockin" ? "Foto Absen Masuk" : "Foto Absen Pulang"}
          </Text>
          <Image source={{ uri: photoUri }} style={styles.previewImage} />
          <TouchableOpacity style={styles.button} onPress={retakePhoto}>
            <Text style={styles.buttonText}>Ambil Ulang</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <CameraView ref={cameraRef} style={styles.camera} facing={"front"}>
          <View style={styles.cameraButtons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#10B981" }]}
              onPress={() => takePhoto("clockin")}
            >
              <Text style={styles.buttonText}>Absen Masuk</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#EF4444" }]}
              onPress={() => takePhoto("clockout")}
            >
              <Text style={styles.buttonText}>Absen Pulang</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  cameraButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  previewContainer: {
    alignItems: "center",
    padding: 20,
  },
  statusText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  previewImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
});

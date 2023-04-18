import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import Constants from "expo-constants";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import EvilIcon from "../node_modules/@expo/vector-icons/EvilIcons";
import AntDesign from "../node_modules/@expo/vector-icons/AntDesign";
import UserAvatar from "@muhzi/react-native-user-avatar";
import axios from "axios";

const CalendarScreen = () => {
  // currentDate:  lưu trữ ngày hiện tại và được khởi tạo ban đầu bằng đối tượng Date mới
  const [currentDate, setCurrentDate] = useState(new Date());
  // selectedDate lưu trữ ngày được chọn (nếu có) và được khởi tạo ban đầu bằng giá trị null
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  {/* xác định các ngày được chọn và hiện tại daysOfWeek để hiển thị thứ của các ngày
  isToday và isSelected được sử dụng để xác định xem ngày đó có phải là ngày hiện tại
  hoặc được chọn không, từ đó định dạng style của các phần tử trong danh sách.*/}
  const renderDay = ({ item }) => {
    const date = new Date(currentDate);
    const dayOfWeek = date.getDay();
    const diff = item - dayOfWeek;
    date.setDate(currentDate.getDate() + diff);
    const isToday = currentDate.getDate() === date.getDate();
    const isSelected =
      selectedDate && selectedDate.getDate() === date.getDate();
    return (
      // hiển thị thứ và ngày tương ứng
      <TouchableOpacity
        //   setSelectedDate để cập nhật giá trị
        onPress={() => {
          // Lấy danh sách công việc từ backend dựa trên ngày được chọn
          fetchTasks(date).then((tasks) => setTasks(tasks));
          setSelectedDate(date);
        }}
        style={[
          styles.dayContainer,
          isToday && styles.today,
          isSelected && styles.selected,
        ]}
      >
        <Text
          style={[
            styles.dayText,
            isToday && styles.todayText,
            isSelected && styles.selectedText,
          ]}
        >
          {daysOfWeek[item]}
        </Text>
        <Text
          style={[
            styles.dateText,
            isToday && styles.todayText,
            isSelected && styles.selectedText,
          ]}
        >
          {date.getDate()}
        </Text>
      </TouchableOpacity>
    );
  };

  const [task, setTasks] = useState([]);

  const renderTask = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.taskFrame}>
          <Text style={styles.taskName}>{item.name}</Text>
          <Text style={styles.taskTime}>
            {formatTime(item.startTime)} - {formatTime(item.endTime)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{ backgroundColor: "white", flex:100 }}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <View>
        <View style={styles.row}>
          {/* Button: back to previous screen */}
          <TouchableOpacity>
            <AntDesign
              name="left"
              size={30}
              style={styles.arrowIcon}
            ></AntDesign>
          </TouchableOpacity>
          {/* Title */}
          <Text style={styles.title}>Schedule</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Layout calendar */}
          <View style={{ flex: 30, backgroundColor: "white" }}>
            <View style={styles.container}>
              <FlatList
                horizontal={true} //Đặt flatList theo chiều ngang
                showsHorizontalScrollIndicator={false} //Ẩn thanh cuộn ngang
                data={[0, 1, 2, 3, 4, 5, 6]}
                renderItem={renderDay}
                keyExtractor={(item) => item.toString()} //Trích xuất khóa duy nhất cho mỗi phần tử trong dnah sách
              />
            </View>
          </View>
          <View style={styles.line}></View>

          {/* Layout */}

          <View style={{ flex: 70, backgroundColor: "white" }}>
            <FlatList
              data={task}
              renderItem={renderTask}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 45,
    marginLeft: 10,
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
  },

  image: {
    height: 225,
    width: 225,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },

  title: {
    marginLeft: 90,
    marginRight: "auto",
    color: "#363942",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 45,
    shadowOpacity: 0.2,
    // fontStyle
  },

  smallTitle: {
    marginLeft: 15,
    marginRight: "auto",
    color: "#363942",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    shadowOpacity: 0.2,
    // fontStyle
  },

  normalTextOnBackGround: {
    marginLeft: "auto",
    marginRight: 30,
    color: "black",
    fontSize: 13,
    textDecorationLine: "underline",
  },

  textInButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },

  button: {
    // bordercolor: "white",
    backgroundColor: "#4B7BE5",
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    marginHorizontal: 15,
    marginBottom: 30,
  },

  buttonCreateAccount: {
    backgroundColor: "#81A3ED",
    marginVertical: 15,
    height: 50,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    marginHorizontal: 30,
  },

  noteBox: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 5,
    marginBottom: 10,
    height: 340,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    marginHorizontal: 15,
  },

  insertBox: {
    backgroundColor: "#F5F5F5",
    // marginVertical: 10,
    marginTop: 5,
    marginBottom: 10,
    height: 45,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    marginHorizontal: 15,
  },

  textInInsertBox: {
    fontSize: 16,
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: 15,
    marginRight: "auto",
  },

  textInNoteBox: {
    fontSize: 16,
    // fontFamily: "Poppins",
    marginBottom: "auto",
    marginTop: 5,
    marginLeft: 15,
    marginRight: "auto",
    height: 340,
  },

  separator: {
    marginTop: 10,
    marginRight: 25,
    marginLeft: "auto",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 43,
    height: 43,
  },
  dayText: {
    fontSize: 10,
    // fontWeight: "bold",
    color: "#333",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  today: {
    color: "white",
    backgroundColor: "#4B7BE5",
  },

  line: {
    marginTop: 10,
    marginBottom: 20,
    width: 300,
    height: 2,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#777D84",
  },
  selected: {
    borderWidth: 2,
    borderColor: "#4B7BE5",
  },
  selectedText: {
    color: "black",
  },
  todayText: {
    color: "white",
  },

  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskFrame: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    paddingVertical: 5,
  },
  taskName: {
    fontWeight: "bold",
  },
  taskTime: {
    marginTop: 5,
  },
});

// function formatTime(date) {
//   return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// }

function fetchTasks(date) {
  const formattedDate = formatDate(date);
  const url = `https://example.com/tasks?date=${formattedDate}`;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

function formatDate(date) {
  // Định dạng ngày thành chuỗi "yyyy-mm-dd"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export default CalendarScreen;

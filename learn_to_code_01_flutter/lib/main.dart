import 'package:flutter/material.dart';
import 'package:learn_to_code_01_flutter/Screens/create_screen.dart';
import 'package:learn_to_code_01_flutter/Screens/home_screen.dart';

import 'Screens/splash_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.lightBlue,
        accentColor: Colors.black,
        brightness: Brightness.light,
        appBarTheme: AppBarTheme(
          elevation: 0,
        ),
      ),
      routes: <String, WidgetBuilder>{
        '/home': (BuildContext context) => new HomeScreen(),
        '/create': (BuildContext context) => new CreateTaskScreen(),
      },
      home: SplashScreen(),
    );
  }
}

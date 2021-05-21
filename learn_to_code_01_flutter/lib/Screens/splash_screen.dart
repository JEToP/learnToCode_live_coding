import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: FutureBuilder(
          future: _initialization.then((value) async {
            await Future.delayed(Duration(seconds: 2));
            return Navigator.of(context).popAndPushNamed("/home");
          }),
          builder: (context, snapshot) {
            if (snapshot.hasError) {
              return Text("Si è verificato un errore, riprova!");
            }
            return CircularProgressIndicator();
          },
        ),
      ),
    );
  }
}

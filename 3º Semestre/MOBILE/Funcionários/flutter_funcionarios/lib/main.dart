import 'package:flutter/material.dart';
import 'package:flutter_funcionarios/root/theme.dart';
import 'package:flutter_funcionarios/ui/splash.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Funcionários",
      debugShowCheckedModeBanner: false,
      theme: AppTheme.appTheme,
      home: Splash(),
    );
  }
}


import 'package:flutter/material.dart';
import 'pallet.dart';

abstract class AppTheme {
  static ThemeData appTheme = ThemeData.light().copyWith(
    scaffoldBackgroundColor: AppColors.p1,

    appBarTheme: const AppBarTheme(
      backgroundColor: AppColors.p4,
      iconTheme: IconThemeData(color: Colors.white),
      titleTextStyle: TextStyle(
        color: Colors.white,
        fontWeight: FontWeight.bold,
        fontSize: 22,
      ),
    ),

    textTheme: const TextTheme(
      titleMedium: TextStyle(
        color: AppColors.p4,
        fontSize: 20,
        fontWeight: FontWeight.bold,
      ),
      bodyMedium: TextStyle(
        color: AppColors.p4,
        fontSize: 16,
      ),
    ),

    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        foregroundColor: const WidgetStatePropertyAll(Colors.white),
        backgroundColor: WidgetStateProperty.fromMap({
          WidgetState.pressed: AppColors.p4,
          WidgetState.hovered: AppColors.p2,
          WidgetState.disabled: AppColors.t1,
          WidgetState.any: AppColors.p3,
        }),
      ),
    ),

    canvasColor: AppColors.p2,
  );
}
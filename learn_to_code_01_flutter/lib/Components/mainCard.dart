import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MainCard extends StatelessWidget {
  final Widget child;
  final EdgeInsets innerPadding;
  final EdgeInsets margin;
  final double borderRadius;

  const MainCard({
    @required this.child,
    this.innerPadding,
    this.margin,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: innerPadding ?? EdgeInsets.zero,
      margin: margin ?? EdgeInsets.zero,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(borderRadius ?? 10),
        boxShadow: [
          BoxShadow(
            color: Colors.grey[200],
            blurRadius: 8.0,
            spreadRadius: 0.0,
            offset: Offset(0.0, 8),
          )
        ],
        color: Colors.white,
      ),
      child: child,
    );
  }
}

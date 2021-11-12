import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

Gradient MainGradient(BuildContext context) {
  return LinearGradient(
    begin: Alignment.bottomLeft,
    end: Alignment.topRight,
    stops: [0, 1],
    colors: [
      Color.fromRGBO(0, 201, 255, 0.75),
      Color.fromRGBO(146, 254, 157, 1),
    ],
  );
}

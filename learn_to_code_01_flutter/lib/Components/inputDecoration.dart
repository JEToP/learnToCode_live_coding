import 'package:flutter/material.dart';

InputDecoration customDecoration(
  BuildContext context,
    String label,
    String hint,
) =>
    InputDecoration(
      hintText: hint,
      filled: true,
      alignLabelWithHint: true,
      contentPadding: EdgeInsets.fromLTRB(10, 15.0, 10, 15.0),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10.0),
        borderSide: BorderSide.none,
      ),
      labelText: label,
      labelStyle: TextStyle(color: Theme.of(context).hintColor),
      helperMaxLines: 3,
      helperStyle: Theme.of(context).textTheme.caption,
    );

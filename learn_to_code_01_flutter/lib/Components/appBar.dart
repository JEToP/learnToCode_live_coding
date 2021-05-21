import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import 'gradient.dart';

class CustomAppBar extends StatelessWidget {
  final String title;
  final List<Widget> actions;

  CustomAppBar(this.title, {this.actions});

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      floating: true,
      pinned: true,
      snap: true,
      expandedHeight: 100.0,
      elevation: 0,
      flexibleSpace: Container(
        decoration: BoxDecoration(gradient: MainGradient(context)),
        child: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints constraints) {
            return FlexibleSpaceBar(
              title: Text(
                this.title,
                maxLines: 1,
              ),
              centerTitle: constraints.biggest.height <= 105,
              titlePadding: constraints.biggest.height > 105
                  ? EdgeInsets.fromLTRB(20, 10, 20, 10)
                  : null,
            );
          },
        ),
      ),
      actions: this.actions ?? null,
    );
  }
}

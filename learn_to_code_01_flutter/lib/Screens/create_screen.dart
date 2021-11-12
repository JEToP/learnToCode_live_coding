import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:learn_to_code_01_flutter/Components/appBar.dart';
import 'package:learn_to_code_01_flutter/Components/inputDecoration.dart';

class CreateTaskScreen extends StatefulWidget {
  @override
  _CreateTaskScreenState createState() => _CreateTaskScreenState();
}

class _CreateTaskScreenState extends State<CreateTaskScreen> {

  TextEditingController _titleController = new TextEditingController();
  TextEditingController _descController = new TextEditingController();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async => false,
      child: Scaffold(
        floatingActionButton: FloatingActionButton.extended(
          onPressed: () async {
            if (_formKey.currentState.validate()) {
              await FirebaseFirestore.instance.collection('todo').add({
                "title": _titleController.text,
                "description": _descController.text,
                "done": false
              });
              Navigator.of(context).pop();
            }
          },
          label: Text("Salva"),
          icon: Icon(Icons.check),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        body: CustomScrollView(
          slivers: [
            CustomAppBar("Aggiungi task"),
            Form(
              key: _formKey,
              child: SliverPadding(
                padding: const EdgeInsets.all(20.0),
                sliver: SliverList(
                    delegate: SliverChildListDelegate([
                      Padding(
                        padding: const EdgeInsets.only(bottom: 25.0),
                        child: TextFormField(
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          controller: _titleController,
                          keyboardType: TextInputType.text,
                          validator: (value) =>
                          value.isNotEmpty ? null : 'Campo non valido',
                          decoration: customDecoration(context, "Titolo", "Fai la spesa"),
                        ),
                      ),
                      TextFormField(
                        autovalidateMode: AutovalidateMode.onUserInteraction,
                        controller: _descController,
                        maxLines: 4,
                        keyboardType: TextInputType.text,
                        validator: (value) =>
                        value.isNotEmpty ? null : 'Campo non valido',
                        decoration: customDecoration(context, "Descrizione", "Ricordati la lista"),
                      ),
                    ])),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

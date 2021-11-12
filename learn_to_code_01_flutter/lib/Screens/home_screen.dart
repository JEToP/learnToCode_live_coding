import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:learn_to_code_01_flutter/Components/appBar.dart';
import 'package:learn_to_code_01_flutter/Components/mainCard.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  bool showAll;

  @override
  void initState() {
    showAll = false;
    // TODO: implement initState
    super.initState();
  }

  Stream<QuerySnapshot> _usersStream = FirebaseFirestore.instance
      .collection('todo')
      .where('done', isEqualTo: false)
      .snapshots();

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async => false,
      child: Scaffold(
        floatingActionButton: FloatingActionButton.extended(
          onPressed: () {
            Navigator.of(context).pushNamed('/create');
          },
          label: Text("Aggiungi"),
          icon: Icon(Icons.add),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        body: CustomScrollView(
          slivers: [
            CustomAppBar(
              "Todo List",
              actions: [
                TextButton(
                  child: Text(showAll == true ? "NASCONDI" : "MOSTRA",
                      style: TextStyle(color: Colors.black)),
                  onPressed: () {
                    setState(() {
                      if (showAll == true) {
                        _usersStream = FirebaseFirestore.instance
                            .collection('todo')
                            .where('done', isEqualTo: false)
                            .snapshots();
                      } else {
                        _usersStream = FirebaseFirestore.instance
                            .collection('todo')
                            .snapshots();
                      }
                      showAll = !showAll;
                    });
                  },
                )
              ],
            ),
            StreamBuilder<QuerySnapshot>(
              stream: _usersStream,
              builder: (BuildContext context,
                  AsyncSnapshot<QuerySnapshot> snapshot) {
                if (snapshot.hasError) {
                  print(snapshot.error);
                  return SliverFillRemaining(
                    child: Center(child: Text('Errore')),
                    hasScrollBody: false,
                  );
                }
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return SliverFillRemaining(
                    child: Center(child: CircularProgressIndicator()),
                    hasScrollBody: false,
                  );
                }
                return SliverPadding(
                  padding: EdgeInsets.all(15),
                  sliver: snapshot.data.docs.length > 0
                      ? SliverList(
                          delegate: SliverChildBuilderDelegate(
                            (BuildContext context, int index) {
                              return MainCard(
                                innerPadding: EdgeInsets.symmetric(
                                  vertical: 10,
                                  horizontal: 15,
                                ),
                                margin: EdgeInsets.only(bottom: 15),
                                child: Row(
                                  children: [
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Padding(
                                            padding: const EdgeInsets.only(
                                                bottom: 3.0),
                                            child: Text(
                                              snapshot.data.docs[index]
                                                  .data()['title'],
                                            ),
                                          ),
                                          Text(
                                            snapshot.data.docs[index]
                                                .data()['description'],
                                            style: Theme.of(context)
                                                .textTheme
                                                .caption,
                                          )
                                        ],
                                      ),
                                    ),
                                    IconButton(
                                      icon: Icon(
                                        Icons.check_circle_rounded,
                                        size: 30,
                                      ),
                                      color: snapshot.data.docs[index]
                                                  .data()['done'] ==
                                              true
                                          ? Colors.grey[400]
                                          : Colors.black,
                                      onPressed: () {
                                        if (snapshot.data.docs[index]
                                                .data()['done'] ==
                                            false) {
                                          snapshot.data.docs[index].reference
                                              .update({'done': true});
                                        }
                                      },
                                    ),
                                  ],
                                ),
                              );
                            },
                            childCount: snapshot.data.docs.length,
                          ),
                        )
                      : SliverFillRemaining(
                          child: Center(child: Text("Nessun elemento")),
                          hasScrollBody: false,
                        ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

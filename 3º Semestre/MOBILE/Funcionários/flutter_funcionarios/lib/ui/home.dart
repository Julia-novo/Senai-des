import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<dynamic> funcionarios = [];
  int indice = 0;

  @override
  void initState() {
    super.initState();
    carregarJSON();
  }

  Future<void> carregarJSON() async {
    String dados =
        await rootBundle.loadString('assets/mockup/funcionarios.json');

    setState(() {
      funcionarios = json.decode(dados);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Funcionários")),
  body: Center(
  child: Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [         
Container(
  margin: const EdgeInsets.symmetric(horizontal: 40),
  padding: const EdgeInsets.symmetric(horizontal: 12),
  decoration: BoxDecoration(
  borderRadius: BorderRadius.circular(30),
  color: Colors.white,
  boxShadow: const [
BoxShadow(
  color: Colors.black12,
  blurRadius: 8,
  offset: Offset(0, 4),
),
],
),
child: DropdownButton<dynamic>(
                hint: const Text("Selecione um funcionário"),
                isExpanded: true,
                underline: const SizedBox(),
                value: funcionarios.isNotEmpty ? funcionarios[indice] : null,
                items: funcionarios
                    .map(
                      (f) => DropdownMenuItem(
                        value: f,
                        child: Text(f['nome']),
),
)
                    .toList(),
                onChanged: (value) {
                  setState(() {
                    indice = funcionarios.indexOf(value);
                  });
                },
              ),
            ),

            const SizedBox(height: 20),

            
            Text(
              funcionarios.isNotEmpty
                  ? funcionarios[indice]['nome']
                  : "Funcionário",
              style: Theme.of(context).textTheme.titleMedium,
            ),

            const SizedBox(height: 15),

            
            if (funcionarios.isNotEmpty)
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 40),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  color: Colors.white,
                  boxShadow: const [
                    BoxShadow(
                      color: Colors.black12,
                      blurRadius: 10,
                      offset: Offset(0, 5),
                    ),
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    children: [
                      CircleAvatar(
                        radius: 60,
                        backgroundImage:
                            funcionarios[indice]['avatar'] != ""
                                ? NetworkImage(
                                    funcionarios[indice]['avatar'],
                                  )
                                : null,
                        child: funcionarios[indice]['avatar'] == ""
                            ? const Icon(Icons.person, size: 40)
                            : null,
                      ),

                      const SizedBox(height: 15),

                      Text(funcionarios[indice]['cargo']),

                      const SizedBox(height: 8),

                      Text(
                        "R\$ ${funcionarios[indice]['salario'].toStringAsFixed(2).replaceAll('.', ',')}",
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),

                      const SizedBox(height: 8),

                      Text(
                        "Contratado em: ${funcionarios[indice]['dataContatacao']}",
                      ),
                    ],
                  ),
                ),
              ),

            const SizedBox(height: 20),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(
                  onPressed: indice > 0
                      ? () => setState(() => indice--)
                      : null,
                  child: const Text("Anterior"),
                ),
                ElevatedButton(
                  onPressed: indice < funcionarios.length - 1
                      ? () => setState(() => indice++)
                      : null,
                  child: const Text("Próximo"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
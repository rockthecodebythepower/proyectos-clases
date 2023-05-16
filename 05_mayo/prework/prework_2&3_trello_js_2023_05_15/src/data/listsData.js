export const listsData = JSON.parse(localStorage.getItem("lists")) || [
  {
    id: "list0",
    title: "Lista de tareas",
    tasks: [
      {
        id: "task0",
        name: "Hacer la compra",
        tasks: [{ id: "task1", name: "3 Huevos", tasks: [] }],
      },
      { id: "task2", name: "Ir al colegio", tasks: [] },
    ],
  },
  {
    id: "list1",
    title: "En proceso",
    tasks: [{ id: "task3", name: "Pepito", tasks: [] }],
  },
  {
    id: "list2",
    title: "Hecho",
    tasks: [],
  },
];

const data = {
    A: {
      Subjects: ["Math", "Science", "History"],
      Faculty: ["John Smith", "Jane Doe", "David Johnson"],
      "Start Date": "2023-09-01",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Alice Brown",
          total: {
            completed: 30,
            joinedNew: 15,
            ongoing: 25,
          },
        },
        "Branch B": {
          Faculty: "Bob Wilson",
          total: {
            completed: 28,
            joinedNew: 12,
            ongoing: 22,
          },
        },
      },
    },
    B: {
      Subjects: ["English", "Physics", "Math"],
      Faculty: ["Mary Adams", "Michael Clark", "Sarah Evans", "John Smith"],
      "Start Date": "2023-08-15",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Eve Green",
          total: {
            completed: 35,
            joinedNew: 20,
            ongoing: 30,
          },
        },
        "Branch B": {
          Faculty: "Frank White",
          total: {
            completed: 32,
            joinedNew: 14,
            ongoing: 28,
          },
        },
      },
    },
    C: {
      Subjects: ["Computer Science", "Economics", "Psychology", "Math"],
      Faculty: ["George Lee", "Helen Davis", "Ivy Martin","John Smith",],
      "Start Date": "2023-09-15",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Jack Brown",
          total: {
            completed: 40,
            joinedNew: 25,
            ongoing: 35,
          },
        },
        "Branch B": {
          Faculty: "Jill Smith",
          total: {
            completed: 38,
            joinedNew: 18,
            ongoing: 32,
          },
        },
      },
    },
  };

  /*const branchData = Object.values(data).flatMap((program) => {
    return program.Branches;
  });
  console.log(branchData);*/

  /*const branchData = Object.values(data).flatMap((program) => {
    return Object.values(program.Branches);
  });
  console.log(branchData);*/

 /* const branchData = Object.keys(data).flatMap((program) => {
    return Object.keys(program.Branches);
  });
  console.log(branchData); this is will never run because key is not use for internal data */
  
  /*const branchData = Object.values(data).flatMap((program) => {
    return Object.values(program.Branches);
  });
  console.log(branchData);
  
  branchData.map((Branches) => {
    console.log(Branches.total);
  });*/

  const branchData = Object.values(data).flatMap((program) => {
    return Object.values(program.Branches);
  });
  console.log(branchData);
  
  const bdata = branchData.map((Branches) => {
    return Branches.total;
  });
  console.log(bdata);
  bdata.map((datas) => {
    console.log(datas.completed);
  });
  
  
  
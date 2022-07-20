const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operations = () => {
  let operation = parseInt(
    prompt(`Choose the number of the operation that you want to perform it on the array
1-add value
2-delete (value/index)
3-sort the array
4-search for a value
5-quit`)
  );
  switch (operation) {
    case 1:
      let index = parseInt(prompt(`Please enter the index`));
      let value = parseInt(prompt(`Please enter the value`));
      data.splice(index, 0, value);
      alert(data);
      operations();
      break;
    case 2:
      let deletedItem = parseInt(
        prompt(`Choose what you want to delete :
      1- an index
      2- value`)
      );
      switch (deletedItem) {
        case 1:
          const deletedIndex = parseInt(
            prompt(`please enter the index tha you want to delete it`)
          );
          typeof data[deletedIndex] === 'undefined'
            ? alert(`index dosen't exist`)
            : (data.splice(deletedIndex, 1), alert(data));
          operations();
          break;
        case 2:
          const deletedValue = parseInt(
            prompt(`please enter the value tha you want to delete it`)
          );
          data.indexOf(deletedValue) > -1
            ? (data.splice(data.indexOf(deletedValue), 1), alert(data))
            : alert(`value doesn't exist`);
          operations();
          break;
      }
      break;
    case 3:
      const sortedArr = data.sort((a, b) => a - b);
      alert(sortedArr);
      operations();
      break;
    case 4:
      let searchV = parseInt(
        prompt(`enter the value that you want to search for it`)
      );
      // alert(searchV);
      data.indexOf(searchV) !== -1
        ? alert(
            `the value exists and it's in the ${data.indexOf(searchV)}th place`
          )
        : alert(`value doesn't exist`);
      operations();
      break;
    case 5:
      alert(`the final array ${data}`);
      break;
  }
};

//the first call
operations();

const addEventOnInput = (inputNode, inputName, dataStore) => {
  inputNode.on("blur", function() {
    dataStore[inputName] = $(this).val();
    console.log(dataStore);
  });
};

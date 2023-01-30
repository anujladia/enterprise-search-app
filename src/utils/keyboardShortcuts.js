function keyboardShortcuts(dispatch) {
  document.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: 'START_SEARCHING'
      });
    }

    if (e.key === "/") {
      dispatch({
        type: 'SEARCH_FIELD_FOCUS'
      });
    }
  })
};

export default keyboardShortcuts;

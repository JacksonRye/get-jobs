export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, loading: false, jobs: action.payload };

    default:
      break;
  }
};

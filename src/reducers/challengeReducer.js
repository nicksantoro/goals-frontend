import {
  FETCH_CHALLENGES_SUCCESS,
  ADD_CHALLENGE_SUCCESS,
  DELETE_CHALLENGE_SUCCESS,
  // UPDATE_CHALLENGE_SUCCESS,
  // FILTER_CHALLENGES,
  // ADD_LIKE_SUCCESS
} from '../actions/challengeActions'

let initialState = {
  data: [],
  // filteredChallenges: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CHALLENGES_SUCCESS:
      return { ...state, data: action.payload };

    case ADD_CHALLENGE_SUCCESS:
      return { ...state, data: [...state.data, ...action.payload] };

    case DELETE_CHALLENGE_SUCCESS:
      return { ...state, data: action.payload };

    // case UPDATE_CHALLENGE_SUCCESS:

    //   //let eventIndex

    //   const challenge = action.payload

    //   // state.data.map(({ id }, index) => {
    //   //   if (id === challenge.id) {
    //   //     eventIndex = index
    //   //   }
    //   // })

    //   const eventIndex = state.data.findIndex(({ id }) => id === challenge.id)

    //   let challenges = [...state.data]

    //   challenges[eventIndex] = challenge

    //   return { ...state, data: challenges, displayedChallenges: challenges };

    // case ADD_LIKE_SUCCESS: {

    //   const challengeId = action.payload;
    //   ///const eventIndex = state.data.findIndex(({ id}) => id === challenge.id)
    //   // state.data.map(({ id }, index) => {
    //   // if (id === challenge.id) {
    //   //   eventIndex = index
    //   // }

    //   const challenges = state.data.map(e => {
    //     if (challengeId === e.id) { return { ...e, likes: e.likes + 1 }; }
    //     return e;
    //   })

    //   const displayedChallenges = state.displayedEvents.map(e => {
    //     if (challengeId === e.id) { return { ...e, likes: e.likes + 1 }; }
    //     return e;
    //   })


    //   return { ...state, data: challenges, displayedChallenges };
    // }

    // case FILTER_CHALLENGES:
    //   const data = [...state.data];

    //   const filteredData = action.payload === 'all' ? [...data] : data.filter((item) => {
    //     return item.category === action.payload;
    //   });

    //   return { ...state, displayedChallenges: filteredData }


    default:
      return state;
  }

}

const selectUser = state => state.user;

export const selectCurrentUser = (
    [selectUser],
    (user)=> user.currentUser 
)
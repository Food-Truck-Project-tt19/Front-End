const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        addSuccess: state.addSuccess,
        role: state.role,
        favorites: state.favorites,
        username: state.username,
        dinerId: state.dinerId,
        operatorId: state.operatorId,
        error: state.error,
        data: state.data,
    };
};

export default mapStateToProps;
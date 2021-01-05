const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        addSuccess: state.addSuccess,
        role: state.role,
        username: state.username,
        dinerId: state.dinerId,
        operator
    };
};

export default mapStateToProps;
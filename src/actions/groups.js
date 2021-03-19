export const fetchGroups = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/groups', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(groupsJson => {
                console.log('groups', groupsJson)
                this.setState({
                    groups: groupsJson,
                    loading: false
                })
            })
    }
}

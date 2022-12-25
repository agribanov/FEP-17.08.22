import { useEffect, useState } from 'react';

import api from '../../../api';

export default function useUsersList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        api.get('users').then(({ data }) => setList(data));
    }

    function deleteUser(id) {
        api.delete('users/' + id).then(() => {
            fetchUsers();
            // setList(list.filter((item) => item.id !== id));
        });
    }

    return { list, deleteUser, fetchUsers };
}

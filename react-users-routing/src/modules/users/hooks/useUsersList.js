import { useEffect, useState } from 'react';

import api from '../../../api';

export default function useUsersList() {
    const [list, setList] = useState([]);
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        setIsloading(true);
        api.get('users')
            .then(({ data }) => setList(data))
            .finally(() => setIsloading(false));
    }

    function deleteUser(id) {
        api.delete('users/' + id).then(() => {
            fetchUsers();
            // setList(list.filter((item) => item.id !== id));
        });
    }

    return { list, isloading, deleteUser, fetchUsers };
}

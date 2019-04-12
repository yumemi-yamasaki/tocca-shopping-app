export default async function({ store, redirect, route }) {
    let auth = localStorage.getItem('auth');
    auth = JSON.parse(auth);
    if(auth === null && route.path !== '/') {
        return redirect('/');
    } else if(auth !== null) {
        store.dispatch('setAuth', auth);
    }
}
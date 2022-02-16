const SUPABASE_URL = 'https://nxkfcrgevcuksvdnaugc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54a2ZjcmdldmN1a3N2ZG5hdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjAsImV4cCI6MTk1OTkxNzQ2MH0.9e3rnFUxMChSkwzJQcBImTDSwY_4VDtfmLDUZ-dY7gc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function fetchNotes() {
    const resp = await client.from('notes').select('*');
    return checkError(resp);
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    // console.log('user signed up');
    return resp;
}

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });
    return resp;
}

export async function logOut() {
    const resp = client.auth.signOut();
    return resp;
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}

export function checkAuth() {
    if (!getUser()) {
        location.replace('/');
    }
}

export async function insertRow(newPost) {
    const resp = await client.from('notes').insert([newPost]);
    return checkError(resp);
}
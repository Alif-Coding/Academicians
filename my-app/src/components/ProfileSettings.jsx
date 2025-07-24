
export default function SelfProfile() {

    const logout = async () => {
        await supabase.auth.signOut
    }

    return(
        <>
            <div>
                <button onClick={logout}>

                </button>
            </div>
        </>
    )
}
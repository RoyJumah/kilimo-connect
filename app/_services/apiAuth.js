import supabase from "./supabase";

async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) throw new Error(error.message);
  return data;
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

async function loginWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) throw new Error(error.message);

  return data;
}

async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

async function loginAsAdmin(email, password) {

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export {
  loginWithGoogle,
  logout,
  loginWithGithub,
  getCurrentUser,
  loginAsAdmin,
};

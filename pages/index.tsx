import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
// import Account from '../components/Account';
import EmojiButton from '../components/EmojiButton';
import VibeForm from '../components/vibes/VibeForm';

const Index = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      {!session ? (
        <>
          <h1 className="text-4xl font-bold mb-8">Welcome to VibeCheck</h1>
          <div className="w-full max-w-md">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </div>
        </>
      ) : (
        <>
          <EmojiButton />
          <VibeForm />
        </>
      )}
    </div>
  );
};

export default Index;

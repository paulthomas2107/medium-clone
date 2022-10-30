import type { NextPage } from 'next';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Text, Textarea, Grid, Button } from '@nextui-org/react';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';

// localhost:3000/createArticle

const CreateArticle: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  return (
    
    <Grid.Container gap={1}>
      <Text h3>Title</Text>
      <Grid xs={12}>
        <Textarea
          name="title"
          aria-label="title"
          placeholder="Article Title"
          fullWidth={true}
          rows={1}
          size="xl"
        ></Textarea>
      </Grid>
      <Text h3>Article Text</Text>
      <Grid xs={12}>
        <Textarea
          name="content"
          aria-label="content"
          placeholder="Article Content"
          fullWidth={true}
          rows={6}
          size="xl"
        ></Textarea>
      </Grid>
      <Grid xs={12}>
        <Text>Posting as {user?.email}</Text>
      </Grid>
      <Button>Create Article</Button>
    </Grid.Container>

  );
};

export default CreateArticle;
export const getServerSideProps = withPageAuth({ redirectTo: '/login' });

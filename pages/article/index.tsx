import type { NextPage } from 'next';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useEffect, useState } from 'react';
import { Text, Spacer, User, Button} from '@nextui-org/react';

const Article: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<any>({});

  useEffect(() => {
    async function getArticle()  {
        const {data, error} = await supabaseClient
            .from("articles")
            .select("*")
            .filter("id", "eq", id)
            .single()
        if (error) {
            console.log(error)
        } else {
            setArticle(data)
        }
    }
    if (typeof id !== "undefined") {
        getArticle();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
        <Text h2>{article.title}</Text>
        <Spacer y={.5} />
        <User 
            name={article.user_email?.toLowerCase()}
            size="md"
        />
        <Spacer y={1} />
        <Text size="$lg">
            {article.content}
        </Text>
    </>
  );
};

export default Article;

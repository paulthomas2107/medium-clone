import { NextPage } from "next";
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Card, Text} from '@nextui-org/react';

interface Props {
    article: any
}

const ArticleCard: NextPage<Props> = (props) => {

    const router = useRouter();
    const { article } = props;
    
    return (
        <Card 
            isPressable 
            css={{mb: "$10"}} 
            onPress={() => router.push("/article?id=" + article.id) }
            >

        </Card>
    )
}

export default ArticleCard;
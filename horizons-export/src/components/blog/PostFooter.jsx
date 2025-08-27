import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ShareButtons from './ShareButtons';

const PostFooter = ({ postUrl, postTitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700"
        >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <ShareButtons url={postUrl} title={postTitle} />
                <Link to="/#contacto">
                    <Button className="btn-persuasive">
                       Asesoramiento Personalizado
                    </Button>
                 </Link>
             </div>
             <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">Gracias por leer. Esperamos que este artículo te haya sido útil.</p>
        </motion.div>
    );
};

export default PostFooter;
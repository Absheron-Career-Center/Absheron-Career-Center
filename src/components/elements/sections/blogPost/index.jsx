import React from 'react'
import { useLanguage } from '../../../../common/i18n';

const BlogPostItem = () => {
    const { translations } = useLanguage();
    return (
        <div>{translations.blogPostItem}</div>
    )
}

export default BlogPostItem
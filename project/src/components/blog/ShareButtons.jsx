import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">Compartir:</span>
      <FacebookShareButton url={url} quote={title}>
        <Button variant="outline" size="icon" className="rounded-full">
          <FaFacebookF className="h-4 w-4" />
        </Button>
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <Button variant="outline" size="icon" className="rounded-full">
          <FaTwitter className="h-4 w-4" />
        </Button>
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <Button variant="outline" size="icon" className="rounded-full">
          <FaLinkedinIn className="h-4 w-4" />
        </Button>
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title}>
        <Button variant="outline" size="icon" className="rounded-full">
          <FaWhatsapp className="h-4 w-4" />
        </Button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
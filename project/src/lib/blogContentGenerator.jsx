import React from 'react';
import { tagCheck, generateDefaultIntro, generateDefaultFallback, generateDisclaimer } from './blogContentGenerator/utils';
import { generatePillarTwoContent } from './blogContentGenerator/pillarTwo';
import { generateDAC7Content } from './blogContentGenerator/dac7';
import { generateWithholdingContent } from './blogContentGenerator/withholding';
import { generateLLCContent } from './blogContentGenerator/llc';
import { generateNomadGuideContent } from './blogContentGenerator/nomad';
import { generateTransferPricingContent } from './blogContentGenerator/transferPricing';
import { generateCryptoContent } from './blogContentGenerator/crypto';
import { generateSLFormationContent } from './blogContentGenerator/slFormation';
import { generateAutonomoIRPFContent } from './blogContentGenerator/autonomoIRPF';
import { generateVatIgicContent } from './blogContentGenerator/vatIgic';

export const generatePlaceholderContent = (post) => {
    const tags = post.tags || [];
    const title = post.title || "";
    let specificContent = "";

    if (tagCheck(tags, ["Pillar Two", "beps"])) {
        specificContent = generatePillarTwoContent();
    } else if (tagCheck(tags, ["DAC7"])) {
        specificContent = generateDAC7Content();
    } else if (tagCheck(tags, ["withholding tax", "usa", "espana"])) {
        specificContent = generateWithholdingContent();
    } else if (tagCheck(tags, ["llc"])) {
        specificContent = generateLLCContent();
    } else if (tagCheck(tags, ["nomada"])) {
        specificContent = generateNomadGuideContent(post);
    } else if (tagCheck(tags, ["transfer pricing"])) {
        specificContent = generateTransferPricingContent();
    } else if (tagCheck(tags, ["cripto"])) {
        specificContent = generateCryptoContent(post);
    } else if (tagCheck(tags, ["slsa", "espana"])) {
        specificContent = generateSLFormationContent();
    } else if (tagCheck(tags, ["autonomo", "irpf"])) {
        specificContent = generateAutonomoIRPFContent();
    } else if (tagCheck(tags, ["ivaigic"])) {
        specificContent = generateVatIgicContent(post);
    }
    else {
        specificContent = generateDefaultFallback(title);
    }

    return generateDefaultIntro(post) + specificContent + generateDisclaimer();
};
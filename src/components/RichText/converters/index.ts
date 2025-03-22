import {
	JSXConvertersFunction,
	JSXConverters,
} from '@payloadcms/richtext-lexical/react';

type NodeTypes = any; // Define NodeTypes appropriately

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({
	defaultConverters,
}) => {
	return defaultConverters as JSXConverters<NodeTypes>;
};

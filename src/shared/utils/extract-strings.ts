import { PropsWithChildren, ReactElement, ReactNode } from 'react';

// Traverses the children of a component extract a list of strings
const mapChildrenFromReactNode = (
  reactNode: ReactNode | ReactNode[],
): string[] => {
  if (['number', 'string'].includes(typeof reactNode)) {
    return [`${reactNode}`];
  }

  if (typeof reactNode !== 'object') {
    return [];
  }

  if (Array.isArray(reactNode)) {
    return reactNode.reduce(
      (strings: string[], nextNode: ReactNode) => [
        ...strings,
        ...mapChildrenFromReactNode(nextNode),
      ],
      [],
    );
  }

  const asComponent = reactNode as ReactElement<PropsWithChildren<{}>>;

  if (asComponent.props?.children) {
    return mapChildrenFromReactNode(asComponent.props?.children);
  }

  return [];
};

// Uses the above util to map through component children and extract strings
// these strings are then cleaned, trimmed, and joined by spaces.
export const extractStrings = (reactNodeInput?: ReactNode | ReactNode[]) => {
  const strings = reactNodeInput
    ? mapChildrenFromReactNode(reactNodeInput)
    : [];

  return strings.map((text) => text.replace(/\n/gim, ' ').trim()).join(' ');
};

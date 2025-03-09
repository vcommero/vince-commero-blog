import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeblockWrapper({ codeContent, language, maxHeight = 300, otherProps }: any) {
    return (
        <div className="code-block-container" style={{ maxHeight: `${maxHeight}px`, overflow: 'auto' }}>
            <SyntaxHighlighter
                style={nord}
                language={language}
                PreTag="div"
                className="rounded-md my-4"
                {...otherProps}
            >
                {codeContent}
            </SyntaxHighlighter>
        </div>
    );
}
export const DynamicStylesComponent = () => {
    const size = Math.round(Math.random() * 100 + 100);
    return (
        <div style={{
            background: 'blue',
            fontWeight: '700',
            fontSize: '20px',
            width: size,
            height: size
        }}>Test</div>
    )
}
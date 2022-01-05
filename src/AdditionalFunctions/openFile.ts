export function openFile(types: string): Promise<File> {
    return new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = types;

        input.addEventListener('change', (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target?.files) {
                resolve(target.files[0]);
            }
        });

        input.click();
    });
}
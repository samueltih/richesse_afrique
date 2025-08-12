const API_KEY = '---';

export default function () {

    function format(amount: number, language: string, currency: string): string {
        return new Intl.NumberFormat(language, { style: 'currency', currency }).format(amount);
    }
    
    async function convert(amount: number, from: string, to: string): Promise<number> {
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`);
        const body = await response.json();
        return body.data[to] * amount;
    }

    return { format, convert }
}
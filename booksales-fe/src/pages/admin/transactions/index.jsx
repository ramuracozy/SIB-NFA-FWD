import { useEffect, useState } from "react";
import { getTransactions } from "../../../_services/transactions";

export default function AdminTransactions() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const data = await getTransactions();
            setTransactions(data);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch transactions");
            setLoading(false);
            console.error("Error fetching transactions:", err);
        }
    };

    if (loading) return <div>Loading transactions...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between pb-4">
                <h2 className="text-2xl font-semibold">Transaction History</h2>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Transaction ID</th>
                        <th scope="col" className="px-6 py-3">User</th>
                        <th scope="col" className="px-6 py-3">Book</th>
                        <th scope="col" className="px-6 py-3">Price/Item</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6 py-3">Total Price</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">#{transaction.id}</td>
                            <td className="px-6 py-4">{transaction.user?.name || 'N/A'}</td>
                            <td className="px-6 py-4">{transaction.book?.title || 'N/A'}</td>
                            <td className="px-6 py-4">Rp {transaction.book?.price?.toLocaleString('id-ID') || '0'}</td>
                            <td className="px-6 py-4">{transaction.quantity}</td>
                            <td className="px-6 py-4">
                                Rp {(transaction.book?.price * transaction.quantity)?.toLocaleString('id-ID') || '0'}
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-2 rounded-lg text-xs font-medium ${
                                    transaction.status === 'completed' 
                                        ? 'bg-green-100 text-green-800'
                                        : transaction.status === 'pending'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-red-100 text-red-800'
                                }`}>
                                    {transaction.status === 'completed' 
                                        ? 'Transaksi Selesai'
                                        : transaction.status === 'pending'
                                        ? 'Menunggu Pembayaran'
                                        : 'Transaksi Dibatalkan'
                                    }
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {transactions.length === 0 && (
                <div className="text-center py-4">
                    No transactions found.
                </div>
            )}
        </div>
    );
}

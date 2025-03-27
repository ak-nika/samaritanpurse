import React, { useEffect, useState, useContext } from 'react';
import { Table, Card, Tag, Spin, message, Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import apis from '../assets/apis';
import { useLocation } from 'react-router-dom';
import LoadingCenter from '../components/LoadingCenter';
import apis from '../assets/apis';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


function Give() {


    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [reload, setReload] = useState(false);
    const [form] = Form.useForm();



    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const result = await (await fetch(apis.getPayMethods, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
                if (result.status) {
                    setPaymentMethods(result.paymentMethods);
                }
            } catch (e) {
                message.error("Failed to load payment methods");
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [reload]);


    const handlePaymentSelect = (method) => {
        setSelectedMethod(method);
        form.resetFields();
    };


    const handleDepositSubmit = async (values) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('amount', values.amount);
            formData.append('paymentMethod', selectedMethod.id);

            if (values.proof.file) {
                formData.append('proof', values.proof.file);
            }

            let token = "Ok Naw";
            const response = await fetch(apis.getDeposits, {
                method: 'POST',
                body: formData,
                headers: {
                    "Authorization": `${token}`
                },
            });

            const result = await response.json();

            if (response.ok && result.status) {
                message.success("Deposit request submitted successfully!");
                form.resetFields();
                setSelectedMethod(null);
                setReload(!reload);
            } else {
                message.error(result.message || "Failed to submit deposit request");
            }
        } catch (e) {
            console.error(e);
            message.error("An error occurred while submitting the deposit request");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <Nav />
            <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
                {isLoading && <LoadingCenter />}
                <Card className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
                    <div className="py-4">
                        <h3 className="text-2xl font-bold text-center text-gray-800">Select a Payment Method</h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {paymentMethods.map((method) => (
                                <Card
                                    key={method.id}
                                    className={`w-32 h-32 flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${selectedMethod?.id === method.id ? 'border-blue-500 shadow-md' : 'border-gray-300'}`}
                                    onClick={() => handlePaymentSelect(method)}
                                >
                                    <img src={method.img} alt={method.name} className="w-16 h-16" />
                                    <p className="mt-2 font-medium text-gray-700">{method.name}</p>
                                </Card>
                            ))}
                        </div>
                        {selectedMethod && (
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
                                <h4 className="text-xl font-semibold text-gray-800">Wallet Details</h4>
                                <p className="text-gray-700"><strong>Payment Method:</strong> {selectedMethod.name}</p>
                                <p className="text-gray-700"><strong>Address:</strong> {selectedMethod.address}</p>
                                <Form form={form} onFinish={handleDepositSubmit} className="space-y-4 mt-4">
                                    <Form.Item
                                        name="amount"
                                        rules={[{ required: true, message: 'Please enter the deposit amount' }]}
                                    >
                                        <Input type="number" placeholder="Enter amount" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                                    </Form.Item>
                                    <Form.Item
                                        name="proof"
                                        valuePropName="file"
                                        rules={[{ required: true, message: 'Please upload proof of payment' }]}
                                    >
                                        <Upload maxCount={1} beforeUpload={() => false} className="w-full">
                                            <Button icon={<UploadOutlined />} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Upload Proof</Button>
                                        </Upload>
                                    </Form.Item>
                                    <Button type="submit" className="w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition">Submit Deposit</Button>
                                </Form>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
            <Footer />
        </>

    );
}

export default Give;

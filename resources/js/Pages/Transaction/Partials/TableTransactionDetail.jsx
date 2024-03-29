import React, { useEffect, useState } from "react";
import TableBody from "../../../Components/TableBody";
import TableHeader from "../../../Components/TableHeader";
import TextInput from "@/Components/TextInput";
import numeral from "numeral";
import PrimaryButton from "@/Components/PrimaryButton";

export default function TableTransactionDetail({
    heads,
    contents,
    onClick,
    listenGrandTotal,
    onItemsSelectedUpdate,
    is_purchase,
    onDiscountChanged,
}) {
    const [items, setItems] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        setItems(contents.map((item) => ({ ...item, is_wholesaler: false })));
    }, [contents]);

    useEffect(() => {
        calculateGrandTotal();
    }, [items, discount]);

    const handleDiscountChange = (e) => {
        const discountValue = parseFloat(e.target.value);
        setDiscount(discountValue);
        onDiscountChanged(discountValue);
    };

    const handleQuantityChange = (index, qty) => {
        const updatedItems = [...items];
        const item = updatedItems[index];
        let price = item.is_wholesaler ? item.unit?.price : item.price;
        updatedItems[index].qty = qty;
        updatedItems[index].subTotal = qty * price;
        item.is_wholesaler
            ? item.unit.sum * item.qty > item.stock
                ? (updatedItems[index].message = "Stok tidak cukup")
                : null
            : null;
        setItems(updatedItems);
        onItemsSelectedUpdate(updatedItems);
    };

    const handlePriceChange = (index, v_price) => {
        console.log(v_price);
        const updatedItems = [...items];
        const item = updatedItems[index];
        updatedItems[index].price = v_price;
        updatedItems[index].subTotal = item.qty * v_price;
        setItems(updatedItems);
        onItemsSelectedUpdate(updatedItems);
    };

    const handleRemoveItem = (indexToRemove) => {
        const updatedItems = [...items];
        updatedItems.splice(indexToRemove, 1);
        setItems(updatedItems);
        onItemsSelectedUpdate(updatedItems);
    };

    const handleToggleWholesale = (index) => {
        const updatedItems = [...items];
        const item = updatedItems[index];

        if (item.is_wholesaler === true) {
            updatedItems[index].is_wholesaler =
                !updatedItems[index].is_wholesaler;
            // updatedItems[index].qty = item.qty
            updatedItems[index].price = item.item.price;
            updatedItems[index].subTotal = item.qty * item.item.price;
            updatedItems[index].unit_name = "pcs";
            // updatedItems[index].unit = item.unit
            // updatedItems[index].item = item.item
        } else {
            updatedItems[index].is_wholesaler =
                !updatedItems[index].is_wholesaler;
            // updatedItems[index].qty = item.qty
            updatedItems[index].price = item.item.unit.price;
            updatedItems[index].subTotal = item.qty * item.unit.price;
            updatedItems[index].unit_name = item.unit.name;
            // updatedItems[index].unit = item.unit
            // updatedItems[index].item = item.item
        }

        setItems(updatedItems);
        onItemsSelectedUpdate(updatedItems);
    };

    const calculateGrandTotal = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.subTotal || 0;
        });

        const discountedTotal = total - discount; // Apply the discount
        listenGrandTotal(discountedTotal);
        setGrandTotal(discountedTotal);
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="">
                        <tr className="text-center font-bold text-xl">
                            {heads.map((item, index) => (
                                <TableHeader key={index} title={item} />
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr className="border-b">
                                        <TableBody
                                            className="text-center"
                                            children={index + 1}
                                        />
                                        <TableBody children={item?.name} />
                                        <TableBody className="text-center">
                                            <TextInput
                                                className="text-center"
                                                value={numeral(
                                                    item?.qty
                                                ).format("0,0")}
                                                onChange={(e) =>
                                                    handleQuantityChange(
                                                        index,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <small>{item.message}</small>
                                        </TableBody>
                                        <TableBody>{item.unit_name}</TableBody>
                                        {is_purchase ? (
                                            <TableBody className="text-center">
                                                <TextInput
                                                    className="text-center"
                                                    value={item?.price}
                                                    onChange={(e) =>
                                                        handlePriceChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </TableBody>
                                        ) : (
                                            <TableBody
                                                className="text-right"
                                                children={numeral(
                                                    item?.price
                                                ).format("0,0")}
                                            />
                                        )}
                                        <TableBody
                                            className="text-right"
                                            children={numeral(
                                                item?.subTotal
                                            ).format("0,0")}
                                        />
                                        <TableBody className="flex justify-center gap-5">
                                            {/* {item.unit !== null ? (
                                                <PrimaryButton onClick={() => handleToggleWholesale(index)}>
                                                    {item.is_wholesaler ? 'Ubah jadi eceran' : 'Ubah jadi grosir'}
                                                </PrimaryButton>
                                            ) : (
                                                <></>
                                            )} */}
                                            <PrimaryButton
                                                className={
                                                    "bg-red-500 dark:bg-red-300"
                                                }
                                                onClick={() =>
                                                    handleRemoveItem(index)
                                                }
                                            >
                                                Hapus
                                            </PrimaryButton>
                                        </TableBody>
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="text-right mt-4">
                <div>
                    <label htmlFor="discountInput" className="mr-2">
                        Discount: Rp
                    </label>
                    <TextInput
                        id="discountInput"
                        type="number"
                        value={discount}
                        onChange={handleDiscountChange}
                    />
                </div>
                <p className="font-bold">
                    Total : Rp{numeral(grandTotal).format("0,0")}
                </p>
            </div>
        </div>
    );
}

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function ModalAccount({
    showModel,
    submit,
    isDelete,
    data,
    setData,
    errors,
    processing,
    onClick,
    categories,
}) {
    return (
        <Modal show={showModel}>
            <form
                className="p-10 grid grid-cols-2 gap-5"
                onSubmit={(e) => submit(e)}
            >
                {isDelete ? (
                    <p className="dark:text-slate-100 text-2xl">
                        Yakin hapus akun?
                    </p>
                ) : (
                    <div>
                        <div>
                            <InputLabel
                                htmlFor="reference_code"
                                value="Kode Barang"
                            />

                            <TextInput
                                id="reference_code"
                                name="reference_code"
                                value={data.reference_code}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData({
                                        field: "reference_code",
                                        value: e.target.value,
                                    })
                                }
                            />

                            <InputError
                                message={errors.reference_code}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="categories" value="Kategori" />

                            <select
                                value={data.categories[0]?.id}
                                onChange={(e) =>
                                    setData({
                                        field: "categories",
                                        value: e.target.value,
                                    })
                                }
                                className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-full shadow-sm"
                            >
                                <option value="">- pilih kategori -</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <InputError
                                message={errors.categories}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="name" value="Nama" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData({
                                        field: "name",
                                        value: e.target.value,
                                    })
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="price"
                                value="Harga Eceran (Rp)"
                            />

                            <TextInput
                                id="price"
                                name="price"
                                type={"number"}
                                value={data.price}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData({
                                        field: "price",
                                        value: e.target.value,
                                    })
                                }
                            />

                            <InputError
                                message={errors.price}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="stock" value="Stok" />
                            {data.is_wholesaler && (
                                <p className="text-amber-600 dark:text-amber-200 text-sm italic">
                                    Harga grosir diaktifkan! Stok ini berubah
                                    menjadi stok grosir.
                                </p>
                            )}
                            <TextInput
                                id="stock"
                                name="stock"
                                type={"number"}
                                value={data.stock}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData({
                                        field: "stock",
                                        value: e.target.value,
                                    })
                                }
                            />

                            <InputError
                                message={errors.stock}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="min_stock"
                                value="Minimum Stok Tersedia"
                            />

                            <TextInput
                                id="min_stock"
                                name="min_stock"
                                type={"number"}
                                value={data.min_stock}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData({
                                        field: "min_stock",
                                        value: e.target.value,
                                    })
                                }
                            />

                            <InputError
                                message={errors.min_stock}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="shipping_day"
                                value="Lama pemasok mengirim barang (hari)"
                            />
                            <p className="text-amber-600 dark:text-amber-200 text-sm italic">
                                jika dikosongkan maka sistem tidak dapat
                                menyarankan restock barang ini.
                            </p>

                            <TextInput
                                id="shipping_day"
                                name="shipping_day"
                                type={"number"}
                                value={data.shipping_day}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData({
                                        field: "shipping_day",
                                        value: e.target.value,
                                    })
                                }
                            />

                            <InputError
                                message={errors.shipping_day}
                                className="mt-2"
                            />
                        </div>

                        {/* <div className='my-10'>
                            <InputLabel htmlFor="is_wholesaler">
                                <input
                                    className='mr-2 rounded-full'
                                    type="checkbox"
                                    checked={data.is_wholesaler}
                                    onChange={(e) => setData({ field: 'is_wholesaler', value: e.target.checked })}
                                />
                                Aktifkan harga grosir?
                            </InputLabel>
                            <InputError message={errors.shipping_day} className="mt-2" />
                        </div> */}
                    </div>
                )}
                <div className="">
                    {isDelete ? (
                        <></>
                    ) : (
                        <div className="">
                            {data.is_wholesaler && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="unit_name"
                                            value="Satuan"
                                        />
                                        {/* <p className='text-amber-600 dark:text-amber-200 text-sm italic'>jika dikosongkan maka sistem tidak dapat menyarankan restock barang ini.</p> */}

                                        <TextInput
                                            id="unit_name"
                                            name="unit_name"
                                            type={"text"}
                                            value={data.unit_name}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData({
                                                    field: "unit_name",
                                                    value: e.target.value,
                                                })
                                            }
                                        />

                                        <InputError
                                            message={errors.unit_name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="unit_price"
                                            value="Harga Grosir (Rp)"
                                        />
                                        {/* <p className='text-amber-600 dark:text-amber-200 text-sm italic'>jika dikosongkan maka sistem tidak dapat menyarankan restock barang ini.</p> */}

                                        <TextInput
                                            id="unit_price"
                                            name="unit_price"
                                            type={"number"}
                                            value={data.unit_price}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData({
                                                    field: "unit_price",
                                                    value: e.target.value,
                                                })
                                            }
                                        />

                                        <InputError
                                            message={errors.unit_price}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="unit_sum"
                                            value="Jumlah dalam satuan (pcs)"
                                        />
                                        <p className="text-amber-600 dark:text-amber-200 text-sm italic">
                                            contoh: 24 (jika jumlah dalam satuan
                                            isi 24pcs)
                                        </p>

                                        <TextInput
                                            id="unit_sum"
                                            name="unit_sum"
                                            type={"number"}
                                            value={data.unit_sum}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData({
                                                    field: "unit_sum",
                                                    value: e.target.value,
                                                })
                                            }
                                        />

                                        <InputError
                                            message={errors.unit_sum}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                    <div className="flex mt-4 items-center justify-end ">
                        <div
                            className="ml-4 cursor-pointer text-slate-700 dark:text-slate-200"
                            onClick={() => onClick("cancel")}
                            disabled={processing}
                        >
                            Batal
                        </div>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            {isDelete ? "Hapus" : "Simpan"}
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

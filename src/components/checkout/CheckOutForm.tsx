// "use client";

// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// import {
//   Field,
//   FieldLabel,
//   FieldControl,
//   FieldMessage,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";
// // import { Separator } from "@/components/ui/separator";
// import { cn } from "@/lib/utils"

// const formSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Wrong format"),
//   phone: z.string().min(10, "Invalid phone number"),
//   address: z.string().min(2, "Address is required"),
//   zip: z.string().min(3, "Invalid ZIP"),
//   city: z.string().min(2, "City is required"),
//   country: z.string().min(2, "Country is required"),
//   paymentMethod: z.enum(["eMoney", "cash"]),
// });

// type FormData = z.infer<typeof formSchema>;

// function CheckOutForm() {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       zip: "",
//       city: "",
//       country: "",
//       paymentMethod: "eMoney",
//     },
//   });

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = form;

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   return (
//     <div className=''>
//       <form
//       id="form-checkout"
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-10 w-full max-w-2xl mx-auto"
//     >
//       {/* Billing Details */}
//       <section>
//         <h2 className="text-sm font-bold text-orange-500 mb-4 tracking-wide">
//           BILLING DETAILS
//         </h2>

//         <div className="grid sm:grid-cols-2 gap-6">
//           {/* Name */}
//           <Field>
//             <div className="flex justify-between items-center mb-1">
//               <FieldLabel
//                 className={cn(
//                   "text-xs font-semibold text-gray-700",
//                   errors.name && "text-red-500"
//                 )}
//               >
//                 Name
//               </FieldLabel>
//               <FieldMessage className="text-xs font-medium text-red-500">
//                 {errors.name?.message}
//               </FieldMessage>
//             </div>
//             <FieldControl>
//               <Input
//                 placeholder="Alexei"
//                 {...register("name")}
//                 className={cn(
//                   "border-gray-300 focus-visible:ring-orange-500",
//                   errors.name && "border-red-500 focus-visible:ring-red-500"
//                 )}
//               />
//             </FieldControl>
//           </Field>

//           {/* Email */}
//           <Field>
//             <div className="flex justify-between items-center mb-1">
//               <FieldLabel
//                 className={cn(
//                   "text-xs font-semibold text-gray-700",
//                   errors.email && "text-red-500"
//                 )}
//               >
//                 Email Address
//               </FieldLabel>
//               <FieldMessage className="text-xs font-medium text-red-500">
//                 {errors.email?.message}
//               </FieldMessage>
//             </div>
//             <FieldControl>
//               <Input
//                 placeholder="alexei@gmail.com"
//                 {...register("email")}
//                 className={cn(
//                   "border-gray-300 focus-visible:ring-orange-500",
//                   errors.email && "border-red-500 focus-visible:ring-red-500"
//                 )}
//               />
//             </FieldControl>
//           </Field>

//           {/* Phone */}
//           <Field>
//             <div className="flex justify-between items-center mb-1">
//               <FieldLabel
//                 className={cn(
//                   "text-xs font-semibold text-gray-700",
//                   errors.phone && "text-red-500"
//                 )}
//               >
//                 Phone Number
//               </FieldLabel>
//               <FieldMessage className="text-xs font-medium text-red-500">
//                 {errors.phone?.message}
//               </FieldMessage>
//             </div>
//             <FieldControl>
//               <Input
//                 placeholder="+1 (202) 555-0136"
//                 {...register("phone")}
//                 className={cn(
//                   "border-gray-300 focus-visible:ring-orange-500",
//                   errors.phone && "border-red-500 focus-visible:ring-red-500"
//                 )}
//               />
//             </FieldControl>
//           </Field>
//         </div>
//       </section>

//       {/* Shipping Info */}
//       <section>
//         <h2 className="text-sm font-bold text-orange-500 mb-4 tracking-wide">
//           SHIPPING INFO
//         </h2>
//         <div className="grid gap-6">
//           <Field>
//             <div className="flex justify-between items-center mb-1">
//               <FieldLabel
//                 className={cn(
//                   "text-xs font-semibold text-gray-700",
//                   errors.address && "text-red-500"
//                 )}
//               >
//                 Address
//               </FieldLabel>
//               <FieldMessage className="text-xs font-medium text-red-500">
//                 {errors.address?.message}
//               </FieldMessage>
//             </div>
//             <FieldControl>
//               <Input
//                 placeholder="1137 Williams Avenue"
//                 {...register("address")}
//                 className={cn(
//                   "border-gray-300 focus-visible:ring-orange-500",
//                   errors.address && "border-red-500 focus-visible:ring-red-500"
//                 )}
//               />
//             </FieldControl>
//           </Field>

//           <div className="grid sm:grid-cols-2 gap-6">
//             <Field>
//               <div className="flex justify-between items-center mb-1">
//                 <FieldLabel
//                   className={cn(
//                     "text-xs font-semibold text-gray-700",
//                     errors.zip && "text-red-500"
//                   )}
//                 >
//                   ZIP Code
//                 </FieldLabel>
//                 <FieldMessage className="text-xs font-medium text-red-500">
//                   {errors.zip?.message}
//                 </FieldMessage>
//               </div>
//               <FieldControl>
//                 <Input
//                   placeholder="10001"
//                   {...register("zip")}
//                   className={cn(
//                     "border-gray-300 focus-visible:ring-orange-500",
//                     errors.zip && "border-red-500 focus-visible:ring-red-500"
//                   )}
//                 />
//               </FieldControl>
//             </Field>

//             <Field>
//               <div className="flex justify-between items-center mb-1">
//                 <FieldLabel
//                   className={cn(
//                     "text-xs font-semibold text-gray-700",
//                     errors.city && "text-red-500"
//                   )}
//                 >
//                   City
//                 </FieldLabel>
//                 <FieldMessage className="text-xs font-medium text-red-500">
//                   {errors.city?.message}
//                 </FieldMessage>
//               </div>
//               <FieldControl>
//                 <Input
//                   placeholder="New York"
//                   {...register("city")}
//                   className={cn(
//                     "border-gray-300 focus-visible:ring-orange-500",
//                     errors.city && "border-red-500 focus-visible:ring-red-500"
//                   )}
//                 />
//               </FieldControl>
//             </Field>
//           </div>

//           <Field>
//             <div className="flex justify-between items-center mb-1">
//               <FieldLabel
//                 className={cn(
//                   "text-xs font-semibold text-gray-700",
//                   errors.country && "text-red-500"
//                 )}
//               >
//                 Country
//               </FieldLabel>
//               <FieldMessage className="text-xs font-medium text-red-500">
//                 {errors.country?.message}
//               </FieldMessage>
//             </div>
//             <FieldControl>
//               <Input
//                 placeholder="United States"
//                 {...register("country")}
//                 className={cn(
//                   "border-gray-300 focus-visible:ring-orange-500",
//                   errors.country && "border-red-500 focus-visible:ring-red-500"
//                 )}
//               />
//             </FieldControl>
//           </Field>
//         </div>
//       </section>

//       {/* Payment Details */}
//       <section>
//         <h2 className="text-sm font-bold text-orange-500 mb-4 tracking-wide">
//           PAYMENT DETAILS
//         </h2>

//         <Field>
//           <FieldLabel className="text-xs font-semibold text-gray-700 mb-2 block">
//             Payment Method
//           </FieldLabel>
//           <FieldControl>
//             <RadioGroup
//               defaultValue="eMoney"
//               onValueChange={(val) =>
//                 form.setValue("paymentMethod", val as FormData["paymentMethod"])
//               }
//               className="grid sm:grid-cols-2 gap-4"
//             >
//               <label
//                 className={cn(
//                   "flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition-all",
//                   "hover:border-orange-500",
//                   form.watch("paymentMethod") === "eMoney" &&
//                     "border-orange-500 bg-orange-50"
//                 )}
//               >
//                 <RadioGroupItem value="eMoney" />
//                 e-Money
//               </label>

//               <label
//                 className={cn(
//                   "flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition-all",
//                   "hover:border-orange-500",
//                   form.watch("paymentMethod") === "cash" &&
//                     "border-orange-500 bg-orange-50"
//                 )}
//               >
//                 <RadioGroupItem value="cash" />
//                 Cash on Delivery
//               </label>
//             </RadioGroup>
//           </FieldControl>
//         </Field>
//       </section>

//       <Button type="submit" className="w-full">
//         Submit
//       </Button>
//     </form>
//     </div>
//   );
// }

// export default CheckOutForm;


function CheckOutForm() {
  return (
    <div>CheckOutForm</div>
  )
}

export default CheckOutForm

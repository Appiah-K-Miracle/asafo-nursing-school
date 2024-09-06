import React from 'react';
import Image from "next/image";
import {pic5} from "@/public/images";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"




const ExamPage = () => {
    return (
        <section>
            <div className=" bg-primaryColor">
                <Image src={pic5} alt="header image" className="w-full opacity-0 md:opacity-40 md:h-[400px]"/>

            </div>
            <h2 className="absolute top-1/4 left-8  md:left-[28rem] md:top-1/3 text-white text-4xl md:text-6xl font-extrabold uppercase">cohsa exam rules</h2>
            <div className="mx-4 md:mx-32 bg-white relative -top-20">
                <div
                    className="px-4 md:px-32 md:py-16 text-left tracking-wide font-medium text-xl text-TeiColor ">
                    <p className="pb-4">
                        Each course with the exception of a project work, shall normally be completed in one semester.
                    </p>
                    <p className="pb-4">
                        A final (end-of-semester) examination shalll normally be required as a part of every course. An
                        examination schedule for each course shall be published each semester.
                    </p>
                    <p className="pb-4">
                        The marks obtained in the end-of-semester examination shall contribute 60% of the grade for the
                        course while continues assessment contributes the remaining 40% (except for practical or other
                        course which are assessed entirely by continuous assessment).
                    </p>

                    <Table>
                        <TableCaption className="text-xl text-TeiColor font-bold text-left pb-4">Time allocated to
                            examination papers</TableCaption>
                        <TableHeader className="text-lg font-bold text-TeiColor uppercase">
                            <TableRow>
                                <TableHead className="w-[200px]">Credit Hours</TableHead>
                                <TableHead>Hours</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-lg text-TeiColor font-bold">
                            <TableRow>
                                <TableCell>2 Credit Hours</TableCell>
                                <TableCell>2 Hours</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3 Credit Hours</TableCell>
                                <TableCell>2 to 3 Hours</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h3>
                        A candidate who fails to obtain a GPA of 1.50 in the first two-semester examination shall be
                        asked by the head of the institution to withdraw from the institution. He/She may however resit
                        the whole examination in the following year only.
                    </h3>

                    <div className="bg-secondaryColor text-white mt-7 mb-4 p-4 border border-l-8 border-l-primaryColor">
                        <p className="text-lg">
                            This rules have been agreed by Management and academic board that continuous assessment will not be considered for resit papers.
                        </p>
                    </div>
                    <div className="border border-primaryColor p-4">
                    <Dialog >
                        <DialogTrigger >COHSA Grading Points</DialogTrigger>
                        <DialogContent className="bg-gray-100 w-full scroll-auto">
                            <DialogHeader>
                                <DialogDescription>
                                    <Table>
                                        <TableHeader className="text-xs md:text-lg font-bold text-TeiColor uppercase">
                                            <TableRow>
                                                <TableHead >Grade Letter</TableHead>
                                                <TableHead>Mark (%)</TableHead>
                                                <TableHead >Grade Point</TableHead>
                                                <TableHead>Interpretation</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody className="text-xs md:text-lg text-TeiColor font-bold">
                                            <TableRow>
                                                <TableCell>A</TableCell>
                                                <TableCell>80-100</TableCell>
                                                <TableCell>4.00</TableCell>
                                                <TableCell>Outstanding</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>B+</TableCell>
                                                <TableCell>75-79</TableCell>
                                                <TableCell>3.50</TableCell>
                                                <TableCell>Very Good</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>B</TableCell>
                                                <TableCell>70-74</TableCell>
                                                <TableCell>3.00</TableCell>
                                                <TableCell>Good</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>C+</TableCell>
                                                <TableCell>65-69</TableCell>
                                                <TableCell>2.50</TableCell>
                                                <TableCell>Fairly Good</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>C</TableCell>
                                                <TableCell>60-64</TableCell>
                                                <TableCell>2.00</TableCell>
                                                <TableCell>Average</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>D+</TableCell>
                                                <TableCell>55-59</TableCell>
                                                <TableCell>1.50</TableCell>
                                                <TableCell>Below Average</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>D</TableCell>
                                                <TableCell>50-54</TableCell>
                                                <TableCell>1.00</TableCell>
                                                <TableCell>Marginal Pass</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>E</TableCell>
                                                <TableCell>45-49</TableCell>
                                                <TableCell>0.50</TableCell>
                                                <TableCell>Unsatisfactory</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>F</TableCell>
                                                <TableCell>0-44</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>Fail</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    </div>
                </div>
            </div>

        </section>

    )
};

export default ExamPage;
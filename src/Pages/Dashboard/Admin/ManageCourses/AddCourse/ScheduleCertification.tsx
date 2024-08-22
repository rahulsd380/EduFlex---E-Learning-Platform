import React from "react";

type TScheduleCertificationProps = {
  register : any
  errors : any
}
const ScheduleCertification : React.FC<TScheduleCertificationProps> = ({register, errors}) => {
    return (
        <div className="flex flex-col gap-4">
                {/* Start Date & End Date */}
                <div className="flex items-center gap-5">
                  {/* Start Date */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      Start Date
                    </p>
                    <input
                      {...register("startDate", {
                        required: "Start Date is required",
                      })}
                      type="date"
                      id="startDate"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.startDate && (
                      <span className="text-warning-10 text-start">
                        {errors.startDate.message as string}
                      </span>
                    )}
                  </div>

                  {/* End Date */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      End Date
                    </p>
                    <input
                      {...register("endDate", {
                        required: "End Date is required",
                      })}
                      type="date"
                      id="endDate"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.endDate && (
                      <span className="text-warning-10 text-start">
                        {errors.endDate.message as string}
                      </span>
                    )}
                  </div>
                </div>

                {/* Start Date & End Date */}
                <div className="flex items-center gap-5">
                  {/* Enrollment Deadline */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      Enrollment Deadline
                    </p>
                    <input
                      {...register("enrollmentDeadline", {
                        required: "Enrollment Deadline is required",
                      })}
                      type="date"
                      id="enrollmentDeadline"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.enrollmentDeadline && (
                      <span className="text-warning-10 text-start">
                        {errors.enrollmentDeadline.message as string}
                      </span>
                    )}
                  </div>

                  {/* Certification Detils */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      Certification Detils
                    </p>
                    <input
                      {...register("certification", {
                        required: "Certification details is required",
                      })}
                      type="text"
                      id="certification"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.certification && (
                      <span className="text-warning-10 text-start">
                        {errors.certification.message as string}
                      </span>
                    )}
                  </div>
                </div>

              {/* Assignments And Assessments */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-body-text font-medium text-sm">
                    Assignments And Assessments
                  </p>
                  <input
                    {...register("assignmentsAndAssessments", {
                      required: "Assignments And Assessments is required",
                    })}
                    type="text"
                    id="assignmentsAndAssessments"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course Assignments And Assessments."
                  />
                  {errors.assignmentsAndAssessments && (
                    <span className="text-warning-10 text-start">
                      {errors.assignmentsAndAssessments.message as string}
                    </span>
                  )}
                </div>

              {/* Number Of Lessons */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-body-text font-medium text-sm">
                    Number Of Lessons
                  </p>
                  <input
                    {...register("numberOfLessons", {
                      required: "Number Of Lessons is required",
                    })}
                    type="text"
                    id="numberOfLessons"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course Number Of Lessons."
                  />
                  {errors.numberOfLessons && (
                    <span className="text-warning-10 text-start">
                      {errors.numberOfLessons.message as string}
                    </span>
                  )}
                </div>
              </div>
    );
};

export default ScheduleCertification;
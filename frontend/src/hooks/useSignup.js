import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";

const useSignup=()=>{
   const querClient = useQueryClient()

  const {mutate,isPending,error} = useMutation({
    mutationFn: signup,
    onSuccess:(data)=> querClient.invalidateQueries({queryKey:["authUser"]}),
  });

  return{isPending,error,signupMutation:mutate};
}

export default useSignup;
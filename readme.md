this is my way of cooling my nerve with some bad js :)

dag
Here's the raw transcription:

"ah so for that one there will be ah so the way it goes is there is two pipeline for the one ah generally we will create their feature branch and onto that master and that would automatically figure the code pipeline we had on the non-prod account and once that gets deployed we will have an approval stage and that approval stage in turn once approved will promote it to production pipeline in production there is no such approval in etcetera etcetera so in production that just gets copied into whatever the location is and then in airflow you should have all the things necessary"

docker

Here's the raw transcription:

"yeah yeah no so as I said right there is only one thing so in this pipeline the base ah reports QPR code data and ah QFM core whenever they are getting a new package built they will just push a new tag to the python base report and post the pushing of those tags that will automatically trigger a code pipeline on fraud account and then in non fraud once you have proved it it moves to fraud after rebuilding the ECR image ah for that particular base python image now for the consuming reports like EQRTPR analytics or EQRTF data loader or ah EQFM pi data ATL they will have their individual docker files as well as their image building commands and better inside them so whenever you are ah building it on the Octopus on the EAT on their fraud stage they will eventually be pushing their corresponding ECR report I mean that's what we had probably agreed with compliance"